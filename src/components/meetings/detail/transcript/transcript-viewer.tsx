import { SpeakerBlock } from "@/components/meetings/detail/transcript/speaker-block";
import type { MeetingTranscript } from "@/types/transcript";

interface TranscriptViewerProps {
  transcript: MeetingTranscript;
}

export function TranscriptViewer({ transcript }: TranscriptViewerProps) {
  const speakerMap = Object.fromEntries(
    transcript.speakers.map((speaker) => [speaker.id, speaker]),
  );

  return (
    <div className="divide-y divide-gray-50">
      {transcript.segments.map((segment) => {
        const speaker = speakerMap[segment.speakerId];
        if (!speaker) {
          return null;
        }

        return (
          <SpeakerBlock
            key={segment.id}
            segment={segment}
            speaker={speaker}
          />
        );
      })}
    </div>
  );
}
