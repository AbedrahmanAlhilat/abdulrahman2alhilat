import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '@/lib/auth';

interface ContentItem {
  id: string;
  title: string;
  content: string;
}

export default function Admin() {
  const { isAuthenticated, login, logout } = useAuth();
  const [password, setPassword] = useState('');
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleLogin = () => {
    if (!login(password)) {
      alert('Invalid password');
    }
    setPassword('');
  };

  const handleAddContent = () => {
    if (newTitle && newContent) {
      const newItem: ContentItem = {
        id: Date.now().toString(),
        title: newTitle,
        content: newContent,
      };
      setContentItems([...contentItems, newItem]);
      setNewTitle('');
      setNewContent('');
    }
  };

  const handleDeleteContent = (id: string) => {
    setContentItems(contentItems.filter(item => item.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto p-6">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Textarea
              placeholder="Content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
            <Button onClick={handleAddContent}>Add Content</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Existing Content</h2>
        {contentItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{item.content}</p>
              <Button 
                variant="destructive" 
                onClick={() => handleDeleteContent(item.id)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 