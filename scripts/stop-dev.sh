#!/usr/bin/env bash
# Kill Next.js dev server without pkill self-match issues
for pid_dir in /proc/[0-9]*; do
  [ -f "$pid_dir/cmdline" ] || continue
  pid="${pid_dir##*/}"
  cmdline=$(tr '\0' ' ' < "$pid_dir/cmdline" 2>/dev/null || true)
  if [[ "$cmdline" == *"node_modules/.bin/next dev"* ]] || [[ "$cmdline" == *"next-server"* ]]; then
    kill -9 "$pid" 2>/dev/null || true
  fi
done
sleep 1
