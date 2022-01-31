export interface EmptyStateComponentProp {
  model: string;
}

export interface ErrorStateComponentProp {
  model: string;
  refetch: () => void;
}
