1. 02/24 AWS EC2 우분투 프리티어 인스턴스 생성 후, 테스트용 도커이미지 docker pull로 이미지 내려받아서 실행  
Azure 유연한 MySQL과 연결 확인(VPN 피어링하는 방법이 없나했는데 CA 다운받고 TLS연결하는거라 보안상 문제는 없다고 판단.)  
EC2 인바운드 8080포트, SSH(본인아이피), 3306(MySQL server) 열고 연결확인 (정상)  
도메인 레코드에 EC2 인스턴스 퍼블릭아이피 할당하고 도메인 테스트 (정상)

2. 02/05 Spring이랑 비슷할줄 알았는데 생각보다 어려움 강의를 들을지 생각해봐야할거같음  
MockRepository를 만드는게 나을까 SqlLite에서 테스트환경을 만드는게 나을까 고민중 일단 AppModule import 테스트케이스해서 해보고 앱실행시켜서 Postman으로도 해봤는데 직관적인건 Postman이지만 규모가 커지면서 업데이트가 늘어나고 변경사항에 대한 이전 테스트케이스를 쓸려면 Postman은 지양하는 것이 맞는 것 같음