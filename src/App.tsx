import { useState } from 'react';
import { BookOpen, Clock, GitBranch, Bookmark, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SettingsDialog } from './components/settings/SettingsDialog';
import { ProphetList } from './components/stories/ProphetList';
import { StoryReader } from './components/stories/StoryReader';
import { TimelineView } from './components/timeline/TimelineView';
import { FamilyTreeView } from './components/family-tree/FamilyTreeView';
import { BookmarkList } from './components/bookmarks/BookmarkList';
import { SearchView } from './components/search/SearchView';
import { useStore } from './store/useStore';
import { useTheme } from './hooks/useTheme';
import { useLanguageEffect } from './hooks/useLanguage';
import { useTranslation } from './i18n/useTranslation';
import type { ProphetId } from './types/prophet';

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [selectedProphet, setSelectedProphet] = useState<ProphetId | null>(null);
  const lastTab = useStore((s) => s.lastTab);
  const setLastTab = useStore((s) => s.setLastTab);
  const setLastProphet = useStore((s) => s.setLastProphet);
  const { t } = useTranslation();

  useTheme();
  useLanguageEffect();

  const handleSelectProphet = (prophetId: ProphetId) => {
    setSelectedProphet(prophetId);
    setLastProphet(prophetId);
    setLastTab('stories');
  };

  const handleBack = () => {
    setSelectedProphet(null);
  };

  const handleBookmarkNavigate = (prophetId: ProphetId, _chapterId: string) => {
    handleSelectProphet(prophetId);
  };

  return (
    <div className="min-h-screen flex flex-col islamic-pattern-bg">
      <Header onSettingsClick={() => setSettingsOpen(true)} />

      <main className="flex-1 container px-4 py-6 md:py-8">
        {selectedProphet ? (
          <StoryReader prophetId={selectedProphet} onBack={handleBack} />
        ) : (
          <Tabs defaultValue={lastTab} onValueChange={setLastTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 h-14 p-1 bg-card/80 backdrop-blur-sm islamic-border">
              <TabsTrigger
                value="stories"
                className="flex items-center gap-2 data-[state=active]:islamic-gradient data-[state=active]:text-white rounded-lg transition-all"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">{t('common.tabs.stories')}</span>
              </TabsTrigger>
              <TabsTrigger
                value="timeline"
                className="flex items-center gap-2 data-[state=active]:islamic-gradient data-[state=active]:text-white rounded-lg transition-all"
              >
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">{t('common.tabs.timeline')}</span>
              </TabsTrigger>
              <TabsTrigger
                value="familyTree"
                className="flex items-center gap-2 data-[state=active]:islamic-gradient data-[state=active]:text-white rounded-lg transition-all"
              >
                <GitBranch className="h-4 w-4" />
                <span className="hidden sm:inline">{t('common.tabs.familyTree')}</span>
              </TabsTrigger>
              <TabsTrigger
                value="bookmarks"
                className="flex items-center gap-2 data-[state=active]:islamic-gradient-gold data-[state=active]:text-white rounded-lg transition-all"
              >
                <Bookmark className="h-4 w-4" />
                <span className="hidden sm:inline">{t('common.tabs.bookmarks')}</span>
              </TabsTrigger>
              <TabsTrigger
                value="search"
                className="flex items-center gap-2 data-[state=active]:islamic-gradient-dark data-[state=active]:text-white rounded-lg transition-all"
              >
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">{t('common.tabs.search')}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="stories" className="mt-6 fade-in">
              <ProphetList onSelectProphet={handleSelectProphet} />
            </TabsContent>

            <TabsContent value="timeline" className="mt-6 fade-in">
              <TimelineView onSelectProphet={handleSelectProphet} />
            </TabsContent>

            <TabsContent value="familyTree" className="mt-6 fade-in">
              <FamilyTreeView onSelectProphet={handleSelectProphet} />
            </TabsContent>

            <TabsContent value="bookmarks" className="mt-6 fade-in">
              <BookmarkList onNavigate={handleBookmarkNavigate} />
            </TabsContent>

            <TabsContent value="search" className="mt-6 fade-in">
              <SearchView onSelectProphet={handleSelectProphet} />
            </TabsContent>
          </Tabs>
        )}
      </main>

      <Footer />
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  );
}

export default App;
