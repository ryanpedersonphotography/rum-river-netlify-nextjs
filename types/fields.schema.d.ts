export type FieldOption = string | { value: string; label: string };

export type FieldConfig = {
  type?: 'text' | 'email' | 'tel' | 'date' | 'select' | 'textarea';
  name: string;
  label: string;
  required?: boolean;
  full?: boolean;
  placeholder?: string;
  rows?: number;              // textarea only
  options?: FieldOption[];    // select only
  hint?: string;
  defaultValue?: string;
  autoComplete?: string;
};

export type ScheduleHeader = {
  accent?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
};
