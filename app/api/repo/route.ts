import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export async function POST(request: NextRequest) {
  const response = await octokit.request("GET /repos/{owner}/{repo}/zipball", {
    owner: "movevirtual",
    repo: "macro-bot",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const status = response.status;
  const downloadUrl = response.url;
  return NextResponse.json({ success: true, status, downloadUrl });
}
