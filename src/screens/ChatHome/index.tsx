import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import MainHeader from "../../components/sections/MainHeader"
import MainFeed from "../../components/sections/MainFeed"
import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"


/**
 * TODO: fix type error (54)
 * TODO: filter query to just user (currently no RLS)
 * 
 * Notes:
 * - Layout wrapper component within component themselves
 *   so that border can extend to bounds of viewport
 * - fetch all chats for a specific user
 * 
 * @returns JSX
 */
const ChatHome = () => {
  const insets = useSafeAreaInsets();
  const [chatList, setChatList] = useState<object>([]);

  const fetchChats = async () => {
    let { data, error } = await supabase
      .from('chat')
      .select(`
        *,
        a:chat_user!user_a(user_name),
        b:chat_user!user_b(user_name),
        chat_message!id(
          *,
          user:chat_user!user_id(user_name)
        )
      `)

    if (error) {
      console.log(error);

    } else if (data) {
      setChatList(data);
    }
  }

  useEffect(() => {
    fetchChats();
    console.log(chatList);
  }, [])

  return (
    <View 
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom = 20,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      <MainHeader />
      <MainFeed chatData={chatList} />
    </View>
  )
}

export default ChatHome;