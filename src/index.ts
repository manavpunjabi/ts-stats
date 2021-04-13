import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";

const matchReader = MatchReader.fromCsv(`football.csv`);
matchReader.load();
const summaryConsole = new Summary(
  new WinsAnalysis(`Man United`),
  new ConsoleReport()
);
const summaryHTML = Summary.winsAnalysisWithHTMLReport(`Man United`);
summaryConsole.buildAndPrintReport(matchReader.matches);
summaryHTML.buildAndPrintReport(matchReader.matches);
