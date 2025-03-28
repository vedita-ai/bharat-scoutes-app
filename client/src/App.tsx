import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BookDetail from "@/pages/BookDetail";
import BookReader from "@/pages/BookReader";
import Library from "@/pages/Library";
import Profile from "@/pages/Profile";
import { BookProvider } from "@/context/BookContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/book" component={BookDetail} />
      <Route path="/book/read" component={BookReader} />
      <Route path="/library" component={Library} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookProvider>
        <Router />
        <Toaster />
      </BookProvider>
    </QueryClientProvider>
  );
}

export default App;
