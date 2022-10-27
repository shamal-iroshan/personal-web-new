export interface CreateMessage {
  name: string;
  email: string;
  message: string;
  date: string;
}

export interface ContactState {
  createMessageIsLoading: boolean;
  createMessageIsSuccess: boolean;
  createMessageError: { hasError: boolean; description: string };
}
