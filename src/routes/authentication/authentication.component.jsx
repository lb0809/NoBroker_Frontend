import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import Navigation from "../navigation/navigation.component";

import { AuthenticationContainer, Authentication_container } from './authentication.styles';


const Authentication = () => {
  return (
    <>

      <Navigation></Navigation>
      <br />
      <br />
      <Authentication_container>
        <AuthenticationContainer>
          <SignInForm />
          <SignUpForm />
        </AuthenticationContainer>

      </Authentication_container>




    </>

  );
};

export default Authentication;
