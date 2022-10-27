export interface IPortfolio {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  order: number;
}

export interface AllPortfolios {
  total: number;
  data: IPortfolio[];
}

export interface PortfolioState {
  getPortfolioIsLoading: boolean;
  getPortfolioIsSuccess: boolean;
  getPortfolioError: { hasError: boolean; description: string };
  portfolios: AllPortfolios;
}
