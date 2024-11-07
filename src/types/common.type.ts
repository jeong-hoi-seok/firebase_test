export type ServerPageProps<T = { id?: string }> = {
  params: T;
  searchParams: Record<string, any>;
};
