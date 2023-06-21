export interface CurrentWeatherDataType {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

export interface ErrorDataType {
  error: {
    message: string;
  };
}
