"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ApiConfigContextType {
  apiBaseUrl: string;
  setApiBaseUrl: (url: string) => void;
}

const ApiConfigContext = createContext<ApiConfigContextType | undefined>(undefined);

const API_BASE_URL_KEY = 'apiBaseUrl';
const DEFAULT_API_BASE_URL = 'https://builder-server-nu.vercel.app/';

export const ApiConfigProvider = ({ children }: { children: ReactNode }) => {
  const [apiBaseUrl, setApiBaseUrlState] = useState<string>(DEFAULT_API_BASE_URL);

  useEffect(() => {
    const stored = localStorage.getItem(API_BASE_URL_KEY);
    if (stored) setApiBaseUrlState(stored);
  }, []);

  const setApiBaseUrl = (url: string) => {
    setApiBaseUrlState(url);
    localStorage.setItem(API_BASE_URL_KEY, url);
  };

  return (
    <ApiConfigContext.Provider value={{ apiBaseUrl, setApiBaseUrl }}>
      {children}
    </ApiConfigContext.Provider>
  );
};

export const useApiConfig = () => {
  const context = useContext(ApiConfigContext);
  if (!context) throw new Error('useApiConfig must be used within ApiConfigProvider');
  return context;
};