export type MeetingStatus = "completed" | "in_progress" | "scheduled";
export type MeetingSecurity = "protected" | "unprotected";

export interface Participant {
  id: string;
  name: string;
  initials: string;
  color: string;
}

export interface Meeting {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  duration: string;
  participants: Participant[];
  status: MeetingStatus;
  security: MeetingSecurity;
}
