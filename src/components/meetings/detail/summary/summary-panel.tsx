"use client";

import { useState } from "react";
import {
  CheckSquare,
  FileText,
  ListTodo,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { PermissionGate } from "@/components/meetings/detail/security/permission-gate";
import { Badge } from "@/components/ui/badge";
import type { MeetingSummaryData } from "@/types/transcript";

interface SummaryPanelProps {
  summary: MeetingSummaryData;
}

export function SummaryPanel({ summary }: SummaryPanelProps) {
  const [items, setItems] = useState(summary.actionItems);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  return (
    <aside className="flex w-full min-h-0 flex-col bg-[#f8f9fa] lg:w-[380px] lg:shrink-0">
      <div className="border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">메모·요약</h3>
      </div>
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        <Accordion type="multiple" defaultValue={["topics", "actions", "segments"]} className="space-y-3">
          <AccordionItem value="topics">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" />
                주요 주제
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {summary.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex gap-2 text-sm leading-6 text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    {topic}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="actions">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                <ListTodo className="h-4 w-4 text-blue-600" />
                다음 할 일
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.id}>
                    <PermissionGate requiredLevel={item.requiredRbacLevel}>
                      <div className="flex items-start gap-2.5 rounded-lg border border-gray-100 bg-white p-2.5">
                        <Checkbox
                          checked={item.done}
                          onCheckedChange={() => toggleItem(item.id)}
                          className="mt-0.5"
                        />
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-sm leading-5 ${
                              item.done
                                ? "text-gray-400 line-through"
                                : "text-gray-800"
                            }`}
                          >
                            {item.text}
                          </p>
                          <div className="mt-1.5 flex items-center gap-1.5">
                            <Badge variant="secondary" className="text-[10px]">
                              {item.assignee}
                            </Badge>
                            <Badge
                              variant={item.done ? "success" : "info"}
                              className="text-[10px]"
                            >
                              {item.done ? "완료" : "진행"}
                            </Badge>
                            <span className="text-[10px] text-gray-400">
                              L{item.requiredRbacLevel}+
                            </span>
                          </div>
                        </div>
                      </div>
                    </PermissionGate>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="segments">
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-blue-600" />
                단락별 요약
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {summary.segmentSummaries.map((segment) => (
                  <div key={segment.id} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] text-gray-500">
                        {segment.timeRange}
                      </span>
                      <p className="text-sm font-medium text-gray-900">
                        {segment.title}
                      </p>
                    </div>
                    <ul className="space-y-1.5 pl-1">
                      {segment.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-5 text-gray-600"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-300" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
