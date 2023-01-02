# 성장일기

~~링크: https://sjdiary.vercel.app~~

## 소개

- 예상한 스케줄과 실행한 스케줄 비교를 통해 조금 더 실행 가능하고 구체적인 계획을 세울수 있도록 돕는 서비스

## 스택

- NodeJS(NestJS)
- MySQL
- TypeORM
- GraphQL (Apollo Server)

## 기능

- 로그인: 구글 OAuth 사용
- 오늘 할일: 오늘 할일을 등록, 수정, 삭제 할 수 있다
- 오늘 했던 일: 오늘 했던일을 등록, 수정, 삭제 할 수 있다

## API 서버 구조

- main.ts: NestJS bootstrap
- app: Root 모듈
- auth: OAuth 관리
- common: 한곳에 종속되지 않고 여러곳에서 사용되는 기능들
- config: ENV 설정 관련
- database: TypeORM 모듈 생성 및 Migration 관리
- entities
- graphql: GraphQL 모듈 및 GraphQL Plugin
- models: GraphQL과 Entity분리를 위한 GraphQL Type 정의
- reviews: Review 모듈
- todos: Todo 모듈
- users: User 모듈
  - repository: 데이터 처리 담당
  - resolver: GraphQL Query, Mutation, Subscription등 요청을 받아 Routing 담당
  - service: 비지니스 로직 담당
  - dto
    - input: GraphQL Query, Mutation, Subscription등에 사용되는 Input 정의
    - output: GraphQL Query, Mutation, Subscription등에 사용되는 Output 정의

## DB 구조

![DB_구조](https://github.com/castlemo/sjdiary-backend/blob/master/images/sjdiary-erd.png)

## 인프라 구조

> 무료 서비스를 제공하기 위해 무료 인프라 서비스를 사용중입니다.  
> AWS RDS의 경우 현재 Free Tier 사용중이고 무료서비스 리서치중입니다. ([Supabase](https://supabase.com) 등등...)

- Backend: [heroku](https://heroku.com)
- Database: AWS RDS(MySQL)
