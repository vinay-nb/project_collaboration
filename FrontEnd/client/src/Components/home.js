import styled from 'styled-components';
import signup  from './user_registration';
// import {Navbar} from 'react-bootstrap'

const Home = (props) => {
    return (
        <Container>
            <Nav>
                <div className='pheading'> 
                    <ProjectColl> Project Collaboration </ProjectColl>
                </div>
                <div>
                    <Join> 
                        <a href="/signup"> Join now </a>    
                    </Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to Project Collaboration</h1>
                    <img src="/Images/projcoll.jpg" alt="" />
                </Hero>
                <Form method="post">
                    <UserSignIn>
                        <div>
                            <input type = "email" id="email" name="email" placeholder='Email or username'/> <br/>
                            <input type = "password" id="password"  name="password" placeholder='Password'/> <br/>
                            <a href> Forgot password? </a><br/><br/>
                        </div>
                    </UserSignIn>
                    <SigninButton>
                        Sign in
                    </SigninButton>
                    <Or>
                        or
                    </Or>
                    <Google>
                        <img src="/Images/google.svg" alt="not found"/>
                         Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding:8px;
`;

const ProjectColl = styled.a`
    max-width:1128px;
    margin: auto;
    padding: 8px 0 16px;
    display: flex;
    align-item: center;
    position: relative;
    font-size: 20px;
    font-weight:600;
    justify-content: space-between;
    flex-wrap:nowrap;
    color: #0a66c2;
    & > pheading{
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }

`;

const Nav = styled.nav`
    max-width:1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-item: center;
    position: relative;
    justify-content: space-between;
    flex-wrap:nowrap;
    & > a {
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }
`;

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 3.5px;
    font-weight: 600;
    color: #0a66c2;
    margin-right: 12px;
    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    } 
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 20px;
    transition-duration: 170ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0,0,0);
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative; 
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align: center;
    margin: auto;
    @media(max-width:768px) {
        margin: auto;
        min-height: 0px;
    }

`

const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0px;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight:250px;
        line-height: 70px;
        @media(max-width:768px) {
            text-align:center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        // z-index: -1;
        width: 650px;
        height: 500px;
        position: absolute;
        bottom: 2px;
        top: 55px;
        right: -110px;
        @media (max-width:760px) {
            top: 230px;
            width: 100%;
            position: initial;
            height: 100%;
        }
    }
`

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media(max-width: 768px) {
        margin-top: 20px;
    }
`;  

const Google = styled.button`    
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.9);
    margin-top:15px;
    &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    border-color: #0a66c2;
    }
    @media(max-width:768px) {
        margin-top: 60px;
        align-items:center;
        margin-left: 7px;

    }
`;

const UserSignIn = styled.div`
    margin-top: -65px;
    input {
        display:flex;
        justify-content:center;
        align-items: center;    
        font-size: 14px;
        color: rgba(0, 0, 0, 0.75);
        height: 35px;
        width: 100%;
        transition-duration: 167ms;
        &:hover: {
            border-color: #0a66c2;
            box-shadow: rgba(0,0,0,0);
        }
        @media(max-width: 768px) {
            margin-top:80px;
            z-index: 0px;
            align-items:center;
            margin-left: 7px;
        }
    }

`;

const SigninButton = styled.button`
    display: flex;
    justify-content: center;
    background-color: #0a66c2;
    color: white;
    align-items: center;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    z-index: 0;
    font-size: 20px;
    margin-bottom: 10px;
    &:hover {
        box-shadow: rgba(0,0,0,0);
        border-color: white;
    }
    @media(max-width:768px) {
        margin-top: 60px;
        align-items:center;
        margin-left: 7px;

    }
`;

const Or = styled.label`
    margin-left: 200px;
    color: #86888a;
    font-size: 20px;
`;

export default Home;