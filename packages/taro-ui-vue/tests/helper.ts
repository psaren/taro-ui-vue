export const sleep = async (timeout: number): Promise<null> =>
  new Promise((resolve) => setTimeout(resolve, timeout))
