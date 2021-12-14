import styled from 'styled-components';
import Signin from './user_signin';
const Signup = (props) => {
    return (
        <Container>
            <Nav>
                <div className='pheading'> 
                    <ProjectColl> Project Collaboration </ProjectColl>
                </div>
            </Nav>
            <Section>
                <Welcome>
                    <h1>Find you project collaborator</h1>
                </Welcome>
                <Form method="post">
                    <UserSignUp>
                        <div>
                            <input type = "text" id="username" name="username" placeholder='Username'/> <br/>
                            <input type = "text" id="email" name="email" placeholder='First name'/> <br/>
                            <input type = "text" id="email" name="email" placeholder='Last name'/> <br/>
                            <input type = "email" id="email" name="email" placeholder='Email'/> <br/>
                            <input type = "password" id="password"  name="password" placeholder='Password'/> <br/>
                        </div>
                    </UserSignUp>
                    <SigninButton>
                        Agree & Join
                    </SigninButton>
                    <Or>
                        or
                    </Or>
                    <Google>
                        <img src="/Images/google.svg" alt="not found"/>
                         Sign up with Google
                    </Google>
                    <Member>
                        Already on Project Collaboration? <a href="/Signin">Sign in</a>
                    </Member>
                </Form>
                <Tc>    

                </Tc>
            </Section>
            
        </Container>
    )
}

const Container = styled.div`
    padding:8px;
    
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

const ProjectColl = styled.a`
    max-width:1128px;
    margin: auto;
    margin-left: 420px;
    padding: 8px 0 16px;
    display: flex;
    align-item: center;
    position: relative;
    font-size: 35px;
    font-weight:600;
    justify-content: space-between;
    flex-wrap:nowrap;
    color: #0a66c2;
    & > pheading{
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            align-content:center;
            padding: 0 5px;
            width: 100%;
        }
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
    height: 600px;
    backgroun-color: #ffffff;
    max-width: 1128px;
    align: center;
    margin: auto;
    @media(max-width:768px) {
        margin: auto;
        min-height: 0px;
    }

`

const Welcome = styled.div`
    max-width:1128px;
    margin: auto;
    margin-left: 450px;
    margin-top: -75px;
    padding: 8px 0 16px;
    display: flex;
    align-item: center;
    position: relative;
    font-size: 22px;
    font-weight:600;
    justify-content: space-between;
    flex-wrap:nowrap;
    color: black;
    & > pheading{
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }

`;

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media(max-width: 768px) {
        margin-top: 20px;
    }
`;  

const UserSignUp = styled.div`
    margin-top: -110px;
    input {
        margin-left: 390px;
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

const Google = styled.button`    
    display: flex;
    margin-left: 390px;
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
    margin-top:10px;
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

const SigninButton = styled.button`
    display: flex;
    margin-left: 390px;
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
    color: #86888a;
    margin-left: 590px;
    font-size: 20px;
`;

const Tc = styled.label`
    color: #86888a;
    margin-left: 590px;
    font-size: 20px;
`;

const Member = styled.a`
    margin-top: -30px;   
    margin-left: 390px;
`;


export default Signup;