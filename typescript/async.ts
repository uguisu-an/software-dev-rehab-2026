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

async function main() {
  const userIds = [1, 2, 3, -1, 4]; // -1は無効なID
  for (const userId of userIds) {
    await fetchUserName(userId)
      .then((userName) => console.log(userName))
      .catch((error: Error) => {
        console.error("Error:", error.message);
      });
  }
}

main();
