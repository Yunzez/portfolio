export interface Theme {
  gapSm: string;
  gapMd: string;
  gapLg: string;
  gapXl: string;
  gapXxl: string;
  radiusXxs: string;
  radiusXs: string;
  radiusSm: string;
  radiusLg: string;
  themePurple: string;
  themeBlack: string;
  themeWhite: string;
  themeLightPurple: string;
  themeLightGrey: string;
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
export const theme:Theme = {
  gapSm: '4px',
  gapMd: '8px',
  gapLg: '12px',
  gapXl: '16px',
  gapXxl: '20px',
  radiusXxs: '4px',
  radiusXs: '8px',
  radiusSm: '20px',
  radiusLg:'100px',
  themePurple: '#4A00F2',
  themeBlack: '#212121',
  themeWhite: '#FFFFFF',
  themeLightPurple: '#FBF9FF',
  themeLightGrey: '#E9E9E9',
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  }
  
};

export const darkTheme:Theme = {
  gapSm: '4px',
  gapMd: '8px',
  gapLg: '12px',
  gapXl: '16px',
  gapXxl: '20px',
  radiusXxs: '4px',
  radiusXs: '8px',
  radiusSm: '20px',
  radiusLg:'100px',
  themePurple: '#4A00F2',
  themeBlack: '#FFFFFF',
  themeWhite: '#121212',
  themeLightPurple: '#4A00F2',
  themeLightGrey: '#E9E9E9',
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  }
  
};

export default theme;
