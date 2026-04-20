import { useState, useId } from 'react';
import { Search, UserX, ShieldCheck, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { User, UserRole } from '@/types/auth';

const MOCK_USERS: User[] = [
  { uid: 'u1', email: 'alice@example.com', displayName: 'Alice Johnson', role: 'attendee' },
  { uid: 'u2', email: 'bob@example.com', displayName: 'Bob Martinez', role: 'attendee' },
  { uid: 'u3', email: 'carol@example.com', displayName: 'Carol Singh', role: 'staff' },
  { uid: 'u4', email: 'dan@example.com', displayName: 'Dan White', role: 'staff' },
  { uid: 'u5', email: 'eve@example.com', displayName: 'Eve Brown', role: 'admin' },
];

const roleBadgeVariant: Record<UserRole, 'default' | 'secondary' | 'destructive'> = {
  attendee: 'secondary',
  staff: 'default',
  admin: 'destructive',
};

export default function UserManagement() {
  const [query, setQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>('all');
  const searchId = useId();

  const filtered = MOCK_USERS.filter((u) => {
    const matchesQuery =
      u.displayName.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase());
    const matchesRole = roleFilter === 'all' || u.role === roleFilter;
    return matchesQuery && matchesRole;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-white">User Management</h1>
        <p className="mt-1 text-slate-400">
          {MOCK_USERS.length} total users · {MOCK_USERS.filter((u) => u.role === 'staff').length} staff
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-1.5">
            <Label htmlFor={searchId}>Search users</Label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              />
              <Input
                id={searchId}
                placeholder="Name or email…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <fieldset className="space-y-1.5">
            <legend className="text-sm font-medium text-slate-200">Role</legend>
            <div role="group" aria-label="Filter by role" className="flex gap-2">
              {(['all', 'attendee', 'staff', 'admin'] as const).map((r) => (
                <Button
                  key={r}
                  variant={roleFilter === r ? 'default' : 'secondary'}
                  size="sm"
                  aria-pressed={roleFilter === r}
                  onClick={() => setRoleFilter(r)}
                  className="capitalize"
                >
                  {r}
                </Button>
              ))}
            </div>
          </fieldset>
        </CardContent>
      </Card>

      {/* Table */}
      <Card aria-labelledby="users-table-heading">
        <CardHeader>
          <CardTitle id="users-table-heading">
            Users
            <span className="ml-2 text-sm font-normal text-slate-400">
              ({filtered.length} result{filtered.length !== 1 ? 's' : ''})
            </span>
          </CardTitle>
          <CardDescription>Manage roles, suspend, or remove accounts</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table
              className="w-full text-sm"
              aria-label="User list"
              aria-rowcount={filtered.length}
            >
              <thead>
                <tr className="border-b border-navy-700 text-left text-xs uppercase tracking-wider text-slate-500">
                  <th scope="col" className="px-6 py-3 font-medium">Name</th>
                  <th scope="col" className="px-6 py-3 font-medium">Email</th>
                  <th scope="col" className="px-6 py-3 font-medium">Role</th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-800">
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-8 text-center text-slate-500"
                    >
                      No users match your filters.
                    </td>
                  </tr>
                ) : (
                  filtered.map((u) => (
                    <tr
                      key={u.uid}
                      className="transition-colors hover:bg-navy-800/50"
                    >
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-700 text-xs font-semibold text-neon"
                            aria-hidden="true"
                          >
                            {u.displayName[0]}
                          </div>
                          <span className="font-medium text-slate-100">
                            {u.displayName}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-slate-400">{u.email}</td>
                      <td className="px-6 py-3">
                        <Badge variant={roleBadgeVariant[u.role]} className="capitalize">
                          {u.role}
                        </Badge>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Promote ${u.displayName}`}
                            title="Promote user"
                          >
                            <ShieldCheck className="h-4 w-4 text-neon" aria-hidden="true" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Suspend ${u.displayName}`}
                            title="Suspend user"
                          >
                            <UserX className="h-4 w-4 text-red-400" aria-hidden="true" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`More options for ${u.displayName}`}
                          >
                            <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
