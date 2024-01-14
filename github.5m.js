#!/usr/bin/env -S PATH="${PATH}:/opt/homebrew/bin" node

// Variables
// <xbar.var>string(GITHUB_TOKEN=""): GitHub Personal Access Token</xbar.var>

const config = {
  image:
    "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",
  token: process.env.GITHUB_TOKEN,
};

const fetchPullRequestsReviewRequested = async () => {
  const query =
    "is:pr is:open review-requested:@me -reviewed-by:@me -author:app/renovate -author:app/dependabot";
  return await searchIssues(query);
};

const fetchPullRequestsMine = async () => {
  const query = "is:pr is:open author:@me";
  return await searchIssues(query);
};

const searchIssues = async (q) => {
  const query = `
query {
  search(query: "${q}", type: ISSUE, first: 100) {
    edges {
      node {
        ... on PullRequest {
          title
          url
          repository {
            name
            owner {
              login
            }
          }
        }
      }
    }
  }
}
`;

  data = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
    body: JSON.stringify({ query }),
  }).then((resp) => resp.json());

  return data.data.search.edges.map((edge) => edge.node);
};

const fetchNotifications = async () => {
  const max = 20;

  const notifications = await fetch(
    `https://api.github.com/notifications?per_page=${max + 1}`,
    {
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    }
  ).then((resp) => resp.json());

  return [
    await Promise.all(
      notifications.slice(0, max).map(async (notification) => {
        const resourceUrl =
          notification.subject.latest_comment_url ?? notification.subject.url;
        if (!resourceUrl) {
          return notification;
        }
        const resource = await fetch(resourceUrl, {
          headers: {
            Authorization: `Bearer ${config.token}`,
          },
        }).then((resp) => resp.json());
        return {
          ...notification,
          html_url: resource.html_url,
        };
      })
    ),
    notifications.length > max,
  ];
};

const readNotification = async (id) => {
  await fetch(`https://api.github.com/notifications/threads/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
  });
};

(async () => {
  const [executable, script, ...args] = process.argv;

  if (args.length > 0) {
    // NOTE: When executed from the menu, xbar.var is not set, so get the token from the arguments.
    config.token = args[0];
    const command = args[1];

    switch (command) {
      case "read-notification":
        const id = args[2];
        await readNotification(id);
        break;
      default:
        throw new Error(`Unknown command: ${command}`);
    }

    return;
  }

  if (!config.token) {
    console.log(`:warning: | image=${config.image}`);
    console.log("---");
    console.log("GITHUB_TOKEN not set. Please set it in the plugin settings.");
    return;
  }

  const [pullRequestsReviewRequested, pullRequestsMine, notificationsAndFlag] =
    await Promise.all([
      fetchPullRequestsReviewRequested(),
      fetchPullRequestsMine(),
      fetchNotifications(),
    ]);
  const [notifications, moreNotifications] = notificationsAndFlag;

  const pullRequestsReviewRequestedCount = pullRequestsReviewRequested.length;
  const pullRequestsReviewRequestedByRepo = pullRequestsReviewRequested.reduce(
    (acc, pr) => {
      const key = `${pr.repository.owner.login}/${pr.repository.name}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(pr);
      return acc;
    },
    {}
  );

  const pullRequestsMineCount = pullRequestsMine.length;
  const pullRequestsMineByRepo = pullRequestsMine.reduce((acc, pr) => {
    const key = `${pr.repository.owner.login}/${pr.repository.name}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(pr);
    return acc;
  }, {});

  const notificationsCount = `${notifications.length}${moreNotifications ? "+" : ""}`;
  const notificationsByRepo = notifications.reduce((acc, notification) => {
    const key = `${notification.repository.owner.login}/${notification.repository.name}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(notification);
    return acc;
  }, {});

  // Menu bar
  console.log(
    `(${pullRequestsReviewRequestedCount}/${pullRequestsMineCount}/${notificationsCount}) | templateImage=${config.image}`
  );
  console.log("---");

  // Review Requested
  console.log(
    `:eyes: Review Requested (${pullRequestsReviewRequestedCount}) | color=red href=https://github.com/search?q=${encodeURIComponent(
      "is:open review-requested:@me -reviewed-by:@me -author:app/renovate -author:app/dependabot"
    )}&type=pullrequests`
  );
  for (const [repo, pullRequests] of Object.entries(
    pullRequestsReviewRequestedByRepo
  )) {
    console.log(`${repo} | size=12`);
    for (const pullRequest of pullRequests) {
      console.log(`${pullRequest.title} | href=${pullRequest.url}`);
    }
  }

  console.log("---");

  // My Pull Requests
  console.log(
    `:seedling: My Pull Requests (${pullRequestsMineCount}) | color=green href=https://github.com/search?q=${encodeURIComponent(
      "author:@me is:open"
    )}&type=pullrequests`
  );
  for (const [repo, pullRequests] of Object.entries(pullRequestsMineByRepo)) {
    console.log(`${repo} | size=12`);
    for (const pullRequest of pullRequests) {
      console.log(`${pullRequest.title} | href=${pullRequest.url}`);
    }
  }

  console.log("---");

  // Notifications
  console.log(
    `:bell: Notifications (${notificationsCount}) | color=yellow href=https://github.com/notifications`
  );
  for (const [repo, notifications] of Object.entries(notificationsByRepo)) {
    console.log(`${repo} | size=12`);
    for (const notification of notifications) {
      console.log(
        `(${notification.reason}) ${notification.subject.title} | href=${notification.html_url}`
      );
      console.log(
        `--Mark as read | shell="${executable}" param1="${script}" param2=${config.token} param3=read-notification param4=${notification.id} refresh=true`
      );
    }
  }
})();
