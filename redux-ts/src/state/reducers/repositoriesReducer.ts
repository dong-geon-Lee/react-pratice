interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

//* 1. 리듀서 매개변수에 state 부분은 인터페이스를 삽입하고 action은 일단 any로 설정해라.
//* 2. switch case문을 작성해라. 반환 유형까지 마무리 하기
//* 3. Action 인터페이스 작성해서 액션 매개변수에 추가해라
// 4. Action 매개변수 간소화 시키기. 새로운 type을 정의해라!
// 5. enum을 추가해서 오타가능성 많은 문자열 type을 정리하기

//
/**
 * 1. | (union Type) OR 연산자
 * 2. payload?의 ?의 정확한 의미를 알아보시오.
 * 3. type과 interface 쓰는 기준에 대해서 알아보시오
 * 4. enum은 무엇인가 ? 왜 사용해?
 */
