import mongoose from 'mongoose';

// tested module
import FieldDetailClass from './fieldDetail';

describe('FieldDetailClass', () => {

	const fieldId = mongoose.Types.ObjectId();

	describe('init', () => {
		test('should call multilanguageModel init method correct params', async () => {
			const FieldDetail = new FieldDetailClass();
			const multilanguageModel = Object.getPrototypeOf(Object.getPrototypeOf(FieldDetail));
			multilanguageModel.init = jest.fn();
			await FieldDetail.init(fieldId);
			expect(multilanguageModel.init).toHaveBeenCalledWith('fieldId', fieldId);
		});
	});
});
