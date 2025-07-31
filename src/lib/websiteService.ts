import { WebsiteGeneration } from '@/types/website';

export async function getWebsiteGeneration(id: string): Promise<WebsiteGeneration> {
  try {
    const response = await fetch(`/api/website-generations/${id}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch website generation');
    }

    return data.generation;
  } catch (error) {
    console.error('Error fetching website generation:', error);
    throw error;
  }
}

export async function getAllWebsiteGenerations(): Promise<WebsiteGeneration[]> {
  try {
    const response = await fetch('/api/website-generations');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch website generations');
    }

    return data.generations;
  } catch (error) {
    console.error('Error fetching website generations:', error);
    throw error;
  }
}

export async function getWebsiteGenerationByStatus(status: WebsiteGeneration['status']): Promise<WebsiteGeneration[]> {
  try {
    const response = await fetch(`/api/website-generations?status=${status}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch website generations');
    }

    return data.generations;
  } catch (error) {
    console.error('Error fetching website generations:', error);
    throw error;
  }
} 