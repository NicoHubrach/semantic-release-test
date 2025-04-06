/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    branches: ["master"],
    plugins: ["@semantic-release/commit-analyzer", "@semantic-release/release-notes-generator", "@semantic-release/github", [
        "@semantic-release/exec",
        {
            "publishCmd": "echo ${{ secrets.FTP_UPLOADURL }}"
        }
    ]],
};

