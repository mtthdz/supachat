export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      chat: {
        Row: {
          created_at: string
          id: string
          updated_at: string | null
          user_a: string | null
          user_b: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          updated_at?: string | null
          user_a?: string | null
          user_b?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string | null
          user_a?: string | null
          user_b?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_user_a_fkey"
            columns: ["user_a"]
            referencedRelation: "chat_user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_user_b_fkey"
            columns: ["user_b"]
            referencedRelation: "chat_user"
            referencedColumns: ["id"]
          }
        ]
      }
      chat_message: {
        Row: {
          body: string | null
          chat_id: string | null
          created_at: string
          flagged: boolean | null
          id: string
          reported: boolean | null
          user_id: string | null
        }
        Insert: {
          body?: string | null
          chat_id?: string | null
          created_at?: string
          flagged?: boolean | null
          id?: string
          reported?: boolean | null
          user_id?: string | null
        }
        Update: {
          body?: string | null
          chat_id?: string | null
          created_at?: string
          flagged?: boolean | null
          id?: string
          reported?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_message_chat_id_fkey"
            columns: ["chat_id"]
            referencedRelation: "chat"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_message_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "chat_user"
            referencedColumns: ["id"]
          }
        ]
      }
      chat_user: {
        Row: {
          created_at: string
          id: string
          user_name: string | null
        }
        Insert: {
          created_at?: string
          id: string
          user_name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_user_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
