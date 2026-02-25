export function fetchUserName(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (id <= 0) {
      reject(new Error("無効なユーザーIDです"));
      return;
    }

    setTimeout(() => {
      resolve(`ユーザー${id}号`);
    }, 1000);
  });
}

export function toError(e: unknown): Error {
  if (e instanceof Error) {
    return e;
  }
  return new Error(String(e));
}

async function main() {
  const userIds = [1, 2, 3, -1, 4]; // -1は無効なID
  for (const userId of userIds) {
    try {
      const userName = await fetchUserName(userId);
      console.log(userName);
    } catch (error) {
      console.error("Error:", toError(error).message);
    }
  }
}

main();
