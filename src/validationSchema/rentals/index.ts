import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rent_start_date: yup.date().required(),
  rent_end_date: yup.date().nullable(),
  tool_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
