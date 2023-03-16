import { useState } from "react"
import { useMutation, gql } from "@apollo/client"



//******************************************** <게시물 등록> ********************************************



import {
    Wrapper,
    Container,
    //--------------------> Box :)
    InPutBox,
    TwoBox,
    HeaderBox,
    AddressBox,
    YoutubeBox,
    AttachPicturesBox,
    MainSettingBox,
    RegistrationBox,
    //--------------------> 기타 :)
    Title,
    Label,
    Writer,
    Password,
    ZipButton,
    Pictures,
    RadioButton,
    RadioLabel,
    SubmitButton,
    PicturesOut,
    RadioOut,
    Error,
    //--------------------> Text :)
    WriterText,
    PasswordText,
    TitleText,
    ContentsText,
    ZipText,
    AddressText,
    YoutubeText,
} from "../../styles/Day1";

//---------------------------------> createBoard 그래프큐엘셋팅
const 나의그래프큐엘셋팅 = gql`
        mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`


export default function BoardsNewPage() {



    //-------------------------------------------------------> Input에 들어가는 문구 선언 :)
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [zip, setZip] = useState("07250")
    const [youtube, setYoutube] = useState("")

    //-------------------------------------------------------> createBoard 그래프큐엘셋팅 선언 :)
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    //---------------------------------------------------------> Input error 선언 :(
    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")
    const [zipError, setZipError] = useState("")


    //----------------------------------------------------------> event.target.value :)


    function onWriter(event) {
        setWriter(event.target.value)
        if (event.target.value !== "") {
            setWriterError("")
        }
        if (String(event.target.value).split('').length < 1) {
            setWriterError("필수 정보입니다.")
        }
        if (String(event.target.value).split('').length > 0 && String(event.target.value).split('').length < 2) {
            setWriterError("2자 이상 적어주세요.")
        }
    }

    function onPassword(event) {
        setPassword(event.target.value)
        if (String(event.target.value).split('').length < 1) {
            setPasswordError("필수 정보입니다.")
        }
        if (String(event.target.value).split('').length > 0 && String(event.target.value).split('').length < 9) {
            setPasswordError("8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        }
        if (String(event.target.value).split('').length > 8) {
            setPasswordError("")
        }
        //한글을 막으려면 STring()이 아니라 Byte()다.
        //Byte()는 바로 길이를 바로 구할 수 있다. 그럼 <split('').length>을 안 적어도 된다.


    }

    function onTitle(event) {
        setTitle(event.target.value)
        if (event.target.value !== "") {
            setTitleError("")
        }
        if (String(event.target.value).split('').length < 1) {
            setTitleError("필수 정보입니다.")
        }
    }

    function onContents(event) {
        setContents(event.target.value)
        if (event.target.value !== "") {
            setContentsError("")
        }
        if (String(event.target.value).split('').length < 1) {
            setContentsError("필수 정보입니다.")
        }
    }

    //--------------------------------------------------------------->  검증하기 / API전송

    const onChangeSignup = async () => {

        if (writer === "") {
            setWriterError("필수 정보입니다.")
        }
        if (password === "") {
            setPasswordError("필수 정보입니다.")
        } else if (String(password).split('').length > 8) {
            setPasswordError("8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        }
        if (title === "") {
            setTitleError("필수 정보입니다.")
        }
        if (contents === "") {
            setContentsError("필수 정보입니다.")
        }
        if (writer !== "" && password !== "" && String(password).split('').length > 8 && title !== "" && contents !== "") {
            alert("회원가입을 축하합니다!!")
            setPasswordError("")
            //---------------------------------> createBoard 그래프큐엘 API 전송 :)

            const result = await 나의함수({
                variables: {
                    writer: writer,
                    title: title,
                    contents: contents
                }
            })
            console.log(result)
        }

    }

    //------------------------------------------------------------->HTML :)

    return (
        <Wrapper>
            <Container>
                <HeaderBox>
                    <Title>게시물 등록</Title>
                </HeaderBox>
                <TwoBox>
                    <Writer>
                        <Label>작성자</Label>
                        <WriterText type="text" onChange={onWriter} placeholder="이름을 작성해주세요." />
                        <Error>{writerError}</Error>
                    </Writer>
                    <Password>
                        <Label>비밀번호</Label>
                        <PasswordText type="password" onChange={onPassword} placeholder="비밀번호를 작성해주세요." />
                        <Error>{passwordError}</Error>
                    </Password>
                </TwoBox>
                <InPutBox>
                    <Label>제목</Label>
                    <TitleText type="text" onChange={onTitle} placeholder="제목을 작성해주세요." />
                    <Error>{titleError}</Error>
                </InPutBox>
                <InPutBox>
                    <Label>내용</Label>
                    <ContentsText type="text" onChange={onContents} placeholder="내용을 작성해주세요." />
                    <Error>{contentsError}</Error>
                </InPutBox>
                <AddressBox>
                    <Label>주소</Label>
                    <ZipText type="text" placeholder="07250" />
                    <ZipButton>우편변호 검색</ZipButton>
                    <AddressText type="text" placeholder="" />
                    <AddressText type="text" placeholder="" />
                </AddressBox>
                <YoutubeBox>
                    <Label>유튜브</Label>
                    <YoutubeText type="text" placeholder="링크를 복사해주세요." />
                </YoutubeBox>
                <AttachPicturesBox>
                    <Label>사진 첨부</Label>
                    <PicturesOut>
                        <Pictures>+</Pictures>
                        <Pictures>+</Pictures>
                        <Pictures>+</Pictures>
                    </PicturesOut>
                </AttachPicturesBox>
                <MainSettingBox>
                    <Label>메인 설정</Label>
                    <RadioOut>
                        <RadioButton type="radio" name="myaRadio" />
                        <RadioLabel>유튜브</RadioLabel>
                        <RadioButton type="radio" name="myaRadio" />
                        <RadioLabel>사진</RadioLabel>
                    </RadioOut>
                </MainSettingBox>
                <RegistrationBox>
                    <SubmitButton onClick={onChangeSignup}>등록하기</SubmitButton>
                </RegistrationBox>
            </Container>
        </Wrapper>
    );
}
