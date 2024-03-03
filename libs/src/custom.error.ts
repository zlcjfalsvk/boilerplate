export const CUSTOM_ERROR_CODE = {
  ALREADY_HAS_USER: 'U_001',
} as const;

export class CustomError extends Error {
  code: number | undefined;
  custom_code: string;

  constructor(
    param: Partial<{ message: string; code: number; custom_code: string }>,
  ) {
    super(param.message);

    this.code = param.code ?? undefined;
    this.custom_code = param.custom_code ?? '';
  }
}
