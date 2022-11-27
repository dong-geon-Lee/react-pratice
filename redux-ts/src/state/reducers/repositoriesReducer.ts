interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

interface SearchRepositoriesAction {
  type: "search_repositories";
}

interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

//* 1. 리듀서 매개변수에 state 부분은 인터페이스를 삽입하고 action은 일단 any로 설정해라.
//* 2. switch case문을 작성해라. 반환 유형까지 마무리 하기
// 3. Action 인터페이스 작성해라.

//
/**
 * 1. | (union Type) OR 연산자
 * 2. payload? 의 정확한 의미를 알아보시오. 이 의미는 그 속성을 가질 수도 있고 갖지 않을 수 도 있다는  뜻이다.
 * 3. 타입을 작성 할때 주로 인터페이스가 사용된다.
 */
