import { ReactNode } from 'react';

export interface PrismThemeGithubProps {
  children: ReactNode;
}

export function PrismThemeGithub({ children }: PrismThemeGithubProps) {
  return <div className="PrismThemeGithub">{children}</div>;
}
