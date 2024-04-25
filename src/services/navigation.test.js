import { apiConfig } from "queries/endpoints";

import { getDocumentDownloadLink, getPcpPath, getProjectPath } from "./navigation";
import { encodeString } from "./utils";

describe("Url services test", () => {
	describe("getDocumentDownloadLink tests", () => {
		test("returns a valid download link", () => {
			const displayName = "Document 1";
			const documentFileName = "document 1.pdf";
			const documentId = "1";
			const internalOriginalName = "document_1.pdf";

			const result = getDocumentDownloadLink(displayName, documentFileName, documentId, internalOriginalName);
			expect(result).toBe(`${apiConfig.url}/download/${documentId}/download/${encodeString(documentFileName)}`);
		});
	});

	describe("getPcpPath tests", () => {
		test("returns a valid pcp path", () => {
			const projectId = "12345";
			const pcpId = "678";
			const result = getPcpPath(pcpId, projectId);
			expect(result).toBe(`/p/${projectId}/cp/${pcpId}`);
		});
	});

	describe("getProjectPath tests", () => {
		test("returns a valid project path", () => {
			const projectId = "12345";
			const result = getProjectPath(projectId);
			expect(result).toBe(`/p/${projectId}/project-details`);
		});
	});
});