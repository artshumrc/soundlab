import faker from 'faker';
import mockingoose from 'mockingoose';
import mongoose from 'mongoose';

// model
import TenantModel from '../models/tenant';

// tested module
import TenantClass, { getTenantsForProject } from './tenant';

describe('TenantClass', () => {

	describe('isSet', () => {
		test('return false if tenant is not set', () => {
			const Tenant = new TenantClass();
			expect(Tenant.isSet).toEqual(false);
		});
		test('return true if tenant is set', () => {
			const Tenant = new TenantClass({});
			expect(Tenant.isSet).toEqual(true);
		});
	});

	describe('getters and setters', () => {
		describe('Name', () => {
			const name = faker.commerce.productName();
			const tenant = {
				name,
			};
			const Tenant = new TenantClass(tenant);

			test('get name', () => {
				expect(Tenant.name).toEqual(name);
			});

			test('get name should return null if tenant not set', () => {
				expect(new TenantClass().name).toBeNull();
			});

			test('setName', async () => {
				const newName = faker.commerce.productName();
				const updatedTenant = {
					name: newName,
				};
				mockingoose.Tenant.toReturn(updatedTenant, 'update');
				await Tenant.setName(newName);
				expect(Tenant.name).toEqual(newName);
			});
		});
	});

	describe('create', () => {
		const projectId = mongoose.Types.ObjectId();
		const name = faker.commerce.productName();

		test('should fail if tenant already set', async () => {
			const Tenant = new TenantClass({});
			await expect(Tenant.create(projectId, name)).rejects.toBeInstanceOf(Error);
		});

		test('should call model create method', async () => {
			const Tenant = new TenantClass();
			TenantModel.create = jest.fn();
			await Tenant.create(projectId, name);
			expect(TenantModel.create).toHaveBeenCalled();
		});

		test('should update tenant', async () => {
			const Tenant = new TenantClass();
			const updatedTenant = {
				name,
				projectId,
			};
			mockingoose.Tenant.toReturn(updatedTenant, 'create');
			await Tenant.create(projectId, name);
			Object.keys(updatedTenant).forEach((key) => {
				expect(Tenant.__tenant).hasOwnProperty(key, updatedTenant[key]);
			});
		});
	});
	
	describe('remove', () => {
		const projectId = mongoose.Types.ObjectId();
		const name = faker.commerce.productName();

		test('should fail if tenant is not set', async () => {
			const Tenant = new TenantClass();
			await expect(Tenant.remove()).rejects.toBeInstanceOf(Error);
		});

		test('should call model remove method', async () => {
			const Tenant = new TenantClass({});
			TenantModel.remove = jest.fn();
			await Tenant.remove();
			expect(TenantModel.remove).toHaveBeenCalled();
		});

		test('should update tenant to be null', async () => {
			const Tenant = new TenantClass({});
			mockingoose.Tenant.toReturn(1, 'remove');
			await Tenant.remove(projectId, name);
			expect(Tenant.__tenant).toBeNull();
		});
	});
});

describe('getTenantsForProject', () => {
	test('should fail if run with no argument', () => {
		expect(getTenantsForProject()).rejects.toBeInstanceOf(Error);
	});

	test('should return array of TenantClass with isSet equal to true', async () => {
		mockingoose.Tenant.toReturn([{}, {}], 'find');
		const projectId = mongoose.Types.ObjectId();
		const tenants = await getTenantsForProject(projectId);
		tenants.forEach((tenant) => {
			expect(tenant.isSet).toEqual(true);
		});
	});
});

