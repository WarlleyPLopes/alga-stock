import { connect } from 'react-redux'
import ProfileCard, { User } from '../Authentication/ProfileCard'
import Header from '../components/Header'
import Container from '../shared/Container'

declare interface ProfileViewProps {
  user: User
}

function ProfileView(props: ProfileViewProps) {
  return <>
    <Header title="AlgaStock" />
    <Container>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <ProfileCard user={props.user} />
      </div>
    </Container>
  </>
}

const mapStateToProps = () => ({
  user: {
    name: 'Warlley Lopes',
    email: 'warlley@algastock.com'
  }
})

export default connect(mapStateToProps)(ProfileView)