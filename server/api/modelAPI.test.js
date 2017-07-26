import faker from 'faker';

// tested module
import modelAPIClass from './modelAPI';

describe('ProjectDetailClass', () => {

	const Model = jest.fn();
	const keys = [];
	const ModelAPI = new modelAPIClass(Model, keys);

	describe('init', () => {
		test('isSet return false if not initiated', () => {
			expect(ModelAPI.isSet).toEqual(false);
		});
		test('should fail if projectId not provided', () => {
			expect(new ModelAPI.init()).rejects.toBeInstanceOf(Error);
		});
		// test('should make isSet true', async () => {
		// 	mockingoose.Tenant.toReturn([{}, {}], 'find');
		// 	const tenant = await new TenantClass().init(mongoose.Types.ObjectId());
		// 	expect(tenant.isSet).toBeTruthy();
		// });
		// test('should fail on second call');
	});

});
