import { AppShell } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/app-shell/Header";
import Navigation from "components/app-shell/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodayPage from "pages/TodayPage";
import ResponseHistoryPage from "pages/ResponseHistoryPage";
import NotFoundPage from "pages/NotFoundPage";
import TodayResponsePage from "pages/TodayResponsePage";
import UserListPage from "pages/UserListPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppShell
          header={{ height: 51 }}
          navbar={{ width: 250, breakpoint: "sm" }}
        >
          <Header />
          <Navigation />
          <AppShell.Main>
            <Routes>
              <Route index element={<TodayPage />} />
              <Route path="/" element={<TodayPage />} />
              <Route path="/responses" element={<ResponseHistoryPage />} />
              <Route path="/answer" element={<TodayResponsePage />} />
              <Route path="/users" element={<UserListPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
