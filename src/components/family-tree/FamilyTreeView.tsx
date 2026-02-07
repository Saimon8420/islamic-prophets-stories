import { useTranslation } from '../../i18n/useTranslation';
import type { ProphetId } from '../../types/prophet';

interface FamilyTreeViewProps {
  onSelectProphet: (prophetId: ProphetId) => void;
}

interface FamilyNode {
  id: string;
  name: { en: string; bn: string; ar: string };
  isProphet: boolean;
  prophetId?: ProphetId;
  children?: FamilyNode[];
}

const familyTree: FamilyNode = {
  id: 'adam',
  name: { en: 'Adam (AS)', bn: 'আদম (আ.)', ar: 'آدم عليه السلام' },
  isProphet: true,
  prophetId: 'adam',
  children: [
    {
      id: 'shith',
      name: { en: 'Shith (Seth)', bn: 'শীষ', ar: 'شيث' },
      isProphet: false,
      children: [
        {
          id: 'idris',
          name: { en: 'Idris (AS)', bn: 'ইদরীস (আ.)', ar: 'إدريس عليه السلام' },
          isProphet: true,
          prophetId: 'idris',
          children: [
            {
              id: 'nuh',
              name: { en: 'Nuh (AS)', bn: 'নূহ (আ.)', ar: 'نوح عليه السلام' },
              isProphet: true,
              prophetId: 'nuh',
              children: [
                {
                  id: 'sam',
                  name: { en: 'Sam', bn: 'সাম', ar: 'سام' },
                  isProphet: false,
                  children: [
                    {
                      id: 'hud',
                      name: { en: 'Hud (AS)', bn: 'হূদ (আ.)', ar: 'هود عليه السلام' },
                      isProphet: true,
                      prophetId: 'hud',
                    },
                    {
                      id: 'salih',
                      name: { en: 'Salih (AS)', bn: 'সালিহ (আ.)', ar: 'صالح عليه السلام' },
                      isProphet: true,
                      prophetId: 'salih',
                    },
                    {
                      id: 'haran',
                      name: { en: 'Haran', bn: 'হারান', ar: 'هاران' },
                      isProphet: false,
                      children: [
                        {
                          id: 'lut',
                          name: { en: 'Lut (AS)', bn: 'লূত (আ.)', ar: 'لوط عليه السلام' },
                          isProphet: true,
                          prophetId: 'lut',
                        },
                      ],
                    },
                    {
                      id: 'ibrahim',
                      name: { en: 'Ibrahim (AS)', bn: 'ইবরাহীম (আ.)', ar: 'إبراهيم عليه السلام' },
                      isProphet: true,
                      prophetId: 'ibrahim',
                      children: [
                        {
                          id: 'ismail',
                          name: { en: 'Ismail (AS)', bn: 'ইসমাঈল (আ.)', ar: 'إسماعيل عليه السلام' },
                          isProphet: true,
                          prophetId: 'ismail',
                          children: [
                            {
                              id: 'muhammad',
                              name: { en: 'Muhammad (SAW)', bn: 'মুহাম্মাদ (সা.)', ar: 'محمد ﷺ' },
                              isProphet: true,
                              prophetId: 'muhammad',
                            },
                          ],
                        },
                        {
                          id: 'ishaq',
                          name: { en: 'Ishaq (AS)', bn: 'ইসহাক (আ.)', ar: 'إسحاق عليه السلام' },
                          isProphet: true,
                          prophetId: 'ishaq',
                          children: [
                            {
                              id: 'al-eis',
                              name: { en: 'Al-Eis (Esau)', bn: 'আল-ঈস (ঈষৌ)', ar: 'العيص (عيسو)' },
                              isProphet: false,
                              children: [
                                {
                                  id: 'ayyub',
                                  name: { en: 'Ayyub (AS)', bn: 'আইয়ূব (আ.)', ar: 'أيوب عليه السلام' },
                                  isProphet: true,
                                  prophetId: 'ayyub',
                                  children: [
                                    {
                                      id: 'dhul-kifl',
                                      name: { en: 'Dhul-Kifl (AS)', bn: 'যুল-কিফল (আ.)', ar: 'ذو الكفل عليه السلام' },
                                      isProphet: true,
                                      prophetId: 'dhul-kifl',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 'yaqub',
                              name: { en: 'Yaqub (AS)', bn: 'ইয়াকুব (আ.)', ar: 'يعقوب عليه السلام' },
                              isProphet: true,
                              prophetId: 'yaqub',
                              children: [
                                {
                                  id: 'yusuf',
                                  name: { en: 'Yusuf (AS)', bn: 'ইউসুফ (আ.)', ar: 'يوسف عليه السلام' },
                                  isProphet: true,
                                  prophetId: 'yusuf',
                                },
                                {
                                  id: 'yahudha',
                                  name: { en: 'Yahudha (Judah)', bn: 'ইয়াহুদা', ar: 'يهوذا' },
                                  isProphet: false,
                                  children: [
                                    {
                                      id: 'dawud',
                                      name: { en: 'Dawud (AS)', bn: 'দাউদ (আ.)', ar: 'داود عليه السلام' },
                                      isProphet: true,
                                      prophetId: 'dawud',
                                      children: [
                                        {
                                          id: 'sulayman',
                                          name: { en: 'Sulayman (AS)', bn: 'সুলাইমান (আ.)', ar: 'سليمان عليه السلام' },
                                          isProphet: true,
                                          prophetId: 'sulayman',
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  id: 'lawi',
                                  name: { en: 'Lawi (Levi)', bn: 'লাভী', ar: 'لاوي' },
                                  isProphet: false,
                                  children: [
                                    {
                                      id: 'musa',
                                      name: { en: 'Musa (AS)', bn: 'মূসা (আ.)', ar: 'موسى عليه السلام' },
                                      isProphet: true,
                                      prophetId: 'musa',
                                    },
                                    {
                                      id: 'harun',
                                      name: { en: 'Harun (AS)', bn: 'হারূন (আ.)', ar: 'هارون عليه السلام' },
                                      isProphet: true,
                                      prophetId: 'harun',
                                      children: [
                                        {
                                          id: 'ilyas',
                                          name: { en: 'Ilyas (AS)', bn: 'ইলিয়াস (আ.)', ar: 'إلياس عليه السلام' },
                                          isProphet: true,
                                          prophetId: 'ilyas',
                                          children: [
                                            {
                                              id: 'al-yasa',
                                              name: { en: 'Al-Yasa (AS)', bn: 'আল-ইয়াসা (আ.)', ar: 'اليسع عليه السلام' },
                                              isProphet: true,
                                              prophetId: 'al-yasa',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      id: 'yunus',
                                      name: { en: 'Yunus (AS)', bn: 'ইউনুস (আ.)', ar: 'يونس عليه السلام' },
                                      isProphet: true,
                                      prophetId: 'yunus',
                                    },
                                    {
                                      id: 'imran',
                                      name: { en: 'Imran', bn: 'ইমরান', ar: 'عمران' },
                                      isProphet: false,
                                      children: [
                                        {
                                          id: 'zakariya',
                                          name: { en: 'Zakariya (AS)', bn: 'যাকারিয়া (আ.)', ar: 'زكريا عليه السلام' },
                                          isProphet: true,
                                          prophetId: 'zakariya',
                                          children: [
                                            {
                                              id: 'yahya',
                                              name: { en: 'Yahya (AS)', bn: 'ইয়াহইয়া (আ.)', ar: 'يحيى عليه السلام' },
                                              isProphet: true,
                                              prophetId: 'yahya',
                                            },
                                          ],
                                        },
                                        {
                                          id: 'maryam',
                                          name: { en: 'Maryam (Mary)', bn: 'মারইয়াম', ar: 'مريم' },
                                          isProphet: false,
                                          children: [
                                            {
                                              id: 'isa',
                                              name: { en: 'Isa (AS)', bn: 'ঈসা (আ.)', ar: 'عيسى عليه السلام' },
                                              isProphet: true,
                                              prophetId: 'isa',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 'madyan',
                          name: { en: 'Madyan (Midian)', bn: 'মাদইয়ান', ar: 'مدين' },
                          isProphet: false,
                          children: [
                            {
                              id: 'shuayb',
                              name: { en: "Shu'ayb (AS)", bn: 'শুআইব (আ.)', ar: 'شعيب عليه السلام' },
                              isProphet: true,
                              prophetId: 'shuayb',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const TreeNode = ({
  node,
  onSelect,
  language,
  depth = 0,
}: {
  node: FamilyNode;
  onSelect: (prophetId: ProphetId) => void;
  language: 'en' | 'bn' | 'ar';
  depth?: number;
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => node.prophetId && onSelect(node.prophetId)}
        disabled={!node.prophetId}
        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
          node.isProphet
            ? 'islamic-gradient text-white hover:opacity-90 shadow-sm cursor-pointer'
            : 'bg-muted text-muted-foreground cursor-default'
        }`}
      >
        {node.name[language]}
      </button>

      {node.children && node.children.length > 0 && (
        <div className="ms-6 mt-2 border-s-2 border-primary/20 ps-4 space-y-2">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onSelect={onSelect} language={language} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const FamilyTreeView = ({ onSelectProphet }: FamilyTreeViewProps) => {
  const { t, language } = useTranslation();

  return (
    <div className="space-y-6 fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold islamic-text-gradient">{t('familyTree.title')}</h2>
        <p className="text-muted-foreground">{t('familyTree.subtitle')}</p>
      </div>

      <div className="flex gap-4 justify-center text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded islamic-gradient" />
          <span>{t('familyTree.prophet')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-muted" />
          <span>{t('familyTree.nonProphet')}</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 border rounded-xl bg-card overflow-x-auto">
        <TreeNode node={familyTree} onSelect={onSelectProphet} language={language} />
      </div>
    </div>
  );
};
