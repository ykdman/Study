export default function UserReducer(state, action) {
  switch (action.type) {
    case "add": {
      if (
        state.length === 0 ||
        state.filter((user) => user.name === action.name).length === 0
      ) {
        // state 길이가 0일 때, 새로운 객체 삽입
        // setstate((prevUsers) => [...prevUsers, { name, count: 1 }]);
        return [...state, { name: action.name, count: 1 }];
      } else {
        // state에 이미 타겟 객체가 존재할때 Count + 1 한 객체로 업데이트
        const existingIndex = state.findIndex(
          (user) => user.name === action.name
        );
        const updateState = {
          name: action.name,
          count: state[existingIndex].count + 1,
        };
        return [
          ...state.filter((user) => user.name !== action.name),
          { ...updateState },
        ];
        // setstate((prevEvent) => {
        //   return [
        //     ...prevEvent.filter((user) => user.name !== name),
        //     { ...updatestate },
        //   ];
        // });
      }
    }

    case "subtract": {
      const existingIndex = state.findIndex(
        (user) => user.name === action.name
      );

      if (existingIndex === -1) {
        // User가 존재하지 않는 경우
        console.log(`${action.name} key was not exist in list`);
        return;
      } else if (state[existingIndex].count > 0) {
        // userCount에 존재하면서 count > 0 일 때 count - 1 한 객체로 업데이트
        const updateUserCount = {
          name: action.name,
          count: state[existingIndex].count - 1,
        };
        console.log("update : " + updateUserCount);
        return [
          ...state.filter((user) => user.name !== action.name),
          { ...updateUserCount },
        ];

        // setUserCount((prevUsers) => {
        //   return [
        //     ...prevUsers.filter((user) => user.name !== name),
        //     { ...updateUserCount },
        //   ];
        // });
      } else if (state[existingIndex].count === 0) {
        // userCount 에 이미 존재하지만 count 가 0일 때는 삭제
        return [...state.filter((user) => user.name !== action.name)];

        // setUserCount((prevUsers) => {
        //   return [...prevUsers.filter((user) => user.name !== name)];
        // });
      }
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      throw Error(`Unknown action type : ${action.type}`);
    }
  }
}
