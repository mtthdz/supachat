import { FlatList, ScrollView, Text} from "react-native"
import ChatCard from "../../containers/ChatCard"
import SMainFeed from "./MainFeed.styles";
import { reduxSelect } from "../../../types/reduxHooks";


// TODO: replace this with supabase type
type row = {
  created_at: string
  id: string
  updated_at: string | null
  user_a: string | null
  user_b: string | null
  a: {user_name: string},
  b: {user_name: string},
}

type chatProps = {
  chatData: row[]
}

const MainFeed = ({ chatData }: chatProps) => {
  let data = chatData;
  let user = reduxSelect(state => state.auth.username)

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => {
        let otherUser = item.a.user_name === user ? item.b.user_name : user;
        return <ChatCard name={otherUser} message={'hello there'} key={index}/>
      }}
    />
  );
};

export default MainFeed;