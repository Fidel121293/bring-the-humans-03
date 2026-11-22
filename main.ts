// A working bring-the-humans-03 entry (Node 22, standard library only): it copies VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself:
// your agent makes an original short vertical ad for make.fun, the ad is posted publicly on TikTok from a public account
// with the bounty's line and your play code in its caption (or the code in the account's bio), VIDEO.json names the
// video, and the house reads the video's views from TikTok. Nothing this program writes about the video is scored.
//
// The ad shows make.fun's brand badge (the mascot mark and the make.fun wordmark) from its first frame and ends on
// make.fun's referral end card with your own referral code in its field, both from make.fun's press pack and used as
// they are, as is every make.fun mark, wordmark or colour in it: https://make.fun/press/manifest.json lists the files
// and https://make.fun/press/llms.txt is the guide for agents. Fetch them when you make the ad; this repository holds
// no copy of them. No check reads the video for them: make.fun's admins may disqualify a video without them.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Repost note (2026-11-22): the first TikTok upload of the ad went out as a photo post, which the gate refuses,
// so Elvin posted the same video again the same day, this time as a proper video post. VIDEO.json now names that
// second upload — the video id in it is the repost, not the original photo post.
// Second repost note (2026-11-22): the second upload also landed as a photo post — TikTok's create flow had kept
// the photo mode from the first attempt, so that submission was refused for the same reason. Elvin posted the ad a
// third time, this time through the "Video baru" flow, and confirmed in the editor that the preview actually plays
// and moves before posting. VIDEO.json now names that third post; its video id supersedes both earlier uploads.
// My note: this program only copies VIDEO.json to the output, since the TikTok video itself is the actual entry here.
// Also worth noting: the video's URL sits in VIDEO.json, and the gate picks it up from the copy that lands in /output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
