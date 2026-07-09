import Link from "next/link";
import { FileText, ListChecks, Lock, ScrollText } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Meeting, MeetingStatus } from "@/types/meeting";

interface RecentMeetingsTableProps {
  meetings: Meeting[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function StatusBadge({ status }: { status: MeetingStatus }) {
  if (status === "completed") {
    return <Badge variant="success">Completed</Badge>;
  }

  if (status === "in_progress") {
    return <Badge variant="info">In Progress</Badge>;
  }

  return <Badge variant="secondary">Scheduled</Badge>;
}

export function RecentMeetingsTable({ meetings }: RecentMeetingsTableProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle>최근 회의</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/meetings">전체 보기</Link>
        </Button>
      </CardHeader>
      <CardContent className="px-0 pb-2">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-6">회의 제목</TableHead>
              <TableHead>날짜 및 시간</TableHead>
              <TableHead>참석자</TableHead>
              <TableHead>소요 시간</TableHead>
              <TableHead>요약</TableHead>
              <TableHead>보안</TableHead>
              <TableHead className="pr-6">생성물</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meetings.map((meeting) => (
              <TableRow key={meeting.id}>
                <TableCell className="pl-6">
                  <Link
                    href={`/meetings/${meeting.id}`}
                    className="group block"
                  >
                    <p className="font-medium text-slate-900 group-hover:text-blue-600">
                      {meeting.title}
                    </p>
                    <p className="text-xs text-slate-500">{meeting.subtitle}</p>
                  </Link>
                </TableCell>
                <TableCell className="whitespace-nowrap text-slate-600">
                  {formatDate(meeting.date)}
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {meeting.participants.slice(0, 4).map((participant) => (
                      <Avatar
                        key={participant.id}
                        className="h-8 w-8 border-2 border-white"
                      >
                        <AvatarFallback
                          className={`${participant.color} text-xs text-white`}
                        >
                          {participant.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {meeting.participants.length > 4 && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-medium text-slate-600">
                        +{meeting.participants.length - 4}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap text-slate-600">
                  {meeting.duration}
                </TableCell>
                <TableCell>
                  <StatusBadge status={meeting.status} />
                </TableCell>
                <TableCell>
                  {meeting.security === "protected" ? (
                    <Badge variant="protected">
                      <Lock className="h-3 w-3" />
                      Protected
                    </Badge>
                  ) : (
                    <Badge variant="outline">Unprotected</Badge>
                  )}
                </TableCell>
                <TableCell className="pr-6">
                  <div className="flex flex-wrap gap-1.5">
                    <Button variant="outline" size="sm" className="h-7 px-2 text-xs" asChild>
                      <Link href={`/meetings/${meeting.id}`}>
                        <FileText className="h-3 w-3" />
                        Summary
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 px-2 text-xs" asChild>
                      <Link href={`/meetings/${meeting.id}`}>
                        <ScrollText className="h-3 w-3" />
                        Script
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 px-2 text-xs" asChild>
                      <Link href={`/meetings/${meeting.id}`}>
                        <ListChecks className="h-3 w-3" />
                        Action Items
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
