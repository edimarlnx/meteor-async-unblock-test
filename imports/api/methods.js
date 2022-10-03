function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Meteor.methods({
  async unblockTest1({ useUnblock }) {
    console.log("[unblockTest1] start", { useUnblock });
    if (useUnblock) {
      console.log("useUnblock", { useUnblock });
      this.unblock();
    }
    await sleep(3000);
    console.log("[unblockTest1] end");
    return `[unblockTest1] useUnblock = ${useUnblock}`;
  },
  async unblockTest2({ useUnblock }) {
    console.log("[unblockTest2] start");
    await sleep(1000);
    console.log("[unblockTest2] end");
    return `[unblockTest2] useUnblock = ${useUnblock}`;
  },
});
