import { useState } from 'react';

export interface ConfigState {
  category: string | null;
  material: string | null;
  size: { width: number; height: number } | null;
  design: string | null;
  color: string | null;
  hardware: string | null;
  extras: string[];
}

export const useConfigurator = () => {
  const [state, setState] = useState<ConfigState>({
    category: null,
    material: null,
    size: null,
    design: null,
    color: null,
    hardware: null,
    extras: [],
  });

  const updateField = <K extends keyof ConfigState>(field: K, value: ConfigState[K]) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  return {
    state,
    updateField,
  };
};
