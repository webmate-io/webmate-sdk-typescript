import {DateTime, ProjectId, TestId, UserId} from "../types";
import {TestRunInfo} from "./test-run-info";

/**
 * Summary information about a Test Run.
 */
export interface TestRunSummary {
    testId: TestId,
    testRunInfo: TestRunInfo,
    creator: UserId,
    projectId: ProjectId,
    startTime: DateTime,
    endTime: DateTime | undefined,
    lastUpdateTime: DateTime | undefined,
    numIssues: number | undefined,
    numFilteredIssues: number | undefined
}
