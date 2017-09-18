import { BulkIngestPage } from './app.po';

describe('bulk-ingest App', () => {
  let page: BulkIngestPage;

  beforeEach(() => {
    page = new BulkIngestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
