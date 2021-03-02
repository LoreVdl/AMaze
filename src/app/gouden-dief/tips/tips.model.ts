export interface Tips {
  description: string;
  canShow: boolean;
  extra?: Array<{name: string, description: string, canShow: boolean}>;
}
