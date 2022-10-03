import React from "react";

export const App = () => {
  const callUnblockTest1 = async (useUnblock = false) => {
    return await Meteor.callAsync("unblockTest1", { useUnblock });
  };
  const callUnblockTest2 = async (useUnblock = false) => {
    return await Meteor.callAsync("unblockTest2", { useUnblock });
  };
  const callAllMethods = (useUnblock) => {
    console.log("[cli:callAllMethods]");
    const p1 = callUnblockTest1(useUnblock)
      .then((res) => console.log("[cli:callUnblockTest] => finish", { res }))
      .catch((err) => console.log("[cli:callUnblockTest] => finish", { err }));
    const p2 = callUnblockTest2(useUnblock)
      .then((res) => console.log("[cli:callUnblockTestAbc] => finish", { res }))
      .catch((err) =>
        console.log("[cli:callUnblockTestAbc] => finish", { err })
      );
    Promise.all([p1, p2]).finally(() => console.log("### Finish"));
  };
  return (
    <div>
      <h1>Test unblock!</h1>
      <button type="button" onClick={() => callAllMethods(false)}>
        call all methods don't use unblock
      </button>
      <br />
      <br />
      <button type="button" onClick={() => callAllMethods(true)}>
        call all methods use unblock
      </button>
    </div>
  );
};
