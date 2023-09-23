import { ScrollView } from "react-native"
import ChatCard from "../../containers/ChatCard"
import SMainFeed from "./MainFeed.styles";

const MainFeed = () => {
  return (
    <ScrollView>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </ScrollView>
  );
};

export default MainFeed;